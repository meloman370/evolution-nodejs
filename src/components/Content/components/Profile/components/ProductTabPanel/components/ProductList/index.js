import React, {PureComponent} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableFooter from '@material-ui/core/TableFooter'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'
import axios from 'axios'
import {Subject} from 'rxjs'
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import {ProductListStyled, SearchField, Row, CreateButton, Top} from './style'
import Image from '../../../../../Image'
import PaginationActions from '../PaginationActions'
import AddModal from './components/AddModal'
import DeleteModal from './components/DeleteModal'
import EditModal from './components/EditModal'

class ProductList extends PureComponent {
  state = {
    products: [],
    page: 0,
    search: '',
    activeItem: {},
    addOpen: false,
    editOpen: false,
    deleteOpen: false
  }

  constructor(props) {
    super(props)
    this.searchField = new Subject()
    this.searchField.pipe(
      distinctUntilChanged(),
      debounceTime(350),
      switchMap((value) => this.getProductList({title: value}))
    ).subscribe((response) => {
      this.setState({
        products: response,
        page: 0
      })
    })
  }
  
  componentDidMount() {
    this.getProductList().then(result => {
      this.setState({
        products: result
      })
    })
  }

  getProductList = async (params) => {
    try {
      const response = await axios.get(process.env.API_URL + `/products/`, {params})
      return response.data.results
    } catch(error) {
      console.log(error)
    }
  }

  handleChangePage = async (event, newPage) => {
    this.setState({
      page: newPage
    })
    const params = {
      page: newPage + 1
    }
    if (this.state.search) {
      params.title = this.state.search
    }
    const products = await this.getProductList(params)
    this.setState({products})
  }

  changeSearch = (e) => {
    this.setState({
      search: e.target.value
    })
    this.searchField.next(e.target.value)
  }

  onCreate = () => {
    this.setState({
      addOpen: true
    })
  }

  onEdit = (product) => {
    console.log('edit', product)
    this.setState({
      editOpen: true,
      activeItem: product
    })
  }

  onDelete = (product) => {
    this.setState({
      deleteOpen: true,
      activeItem: product
    })
  }

  onCloseModal = () => {
    this.setState({
      addOpen: false,
      editOpen: false,
      deleteOpen: false
    })
    this.getProductList().then((products) => {
      this.setState({
        products: products,
        page: 0
      })
    })
  }
  
  render() {
    return(
      <ProductListStyled>
        <Top>
          <Row>
            <SearchField
              id="search"
              label="Поиск"
              value={this.state.search}
              onChange={this.changeSearch}
              margin="normal"
              variant="outlined"
            />
            <CreateButton>
              <Fab size="medium" color="primary" aria-label="add" onClick={this.onCreate}>
                <AddIcon />
              </Fab>
            </CreateButton>
          </Row> 
        </Top>
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Картинка</TableCell>
                <TableCell align="left">Название</TableCell>
                <TableCell align="left">Цена</TableCell>
                <TableCell align="left">Скидка</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.products.map(product => (
                <TableRow key={product.id}>
                  <TableCell align="left">
                    {product.images.length > 0 &&
                      <Image src={product.images[0].origin} webp={product.images[0].compressed} alt={product.images[0].alt}/>
                    }
                  </TableCell>
                  <TableCell align="left">{product.title}</TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">{product.discount}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => this.onEdit(product)}>
                      <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(product)}>
                      <DeleteIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                {this.state.products.length > 0 &&
                  <TablePagination
                    colSpan={5}
                    count={this.state.products.length}
                    rowsPerPage={23}
                    page={this.state.page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    ActionsComponent={PaginationActions}
                  />
                }
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
        <AddModal open={this.state.addOpen} onClose={this.onCloseModal}/>
        <EditModal open={this.state.editOpen} onClose={this.onCloseModal} item={this.state.activeItem}/>
        <DeleteModal open={this.state.deleteOpen} onClose={this.onCloseModal} item={this.state.activeItem}/>
      </ProductListStyled>
    )
  }
}

export default ProductList