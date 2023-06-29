import { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import { IconButton, Menu, MenuItem } from '../../components/ui'
import { useNavigate } from 'react-router-dom'
import { productService } from '../../services'
import PropTypes from 'prop-types'

const MenuAction = (props) => {
  const [anchorElement, setAnchorElement] = useState(null)
  const open = Boolean(anchorElement)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorElement(open ? null : event.currentTarget)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  const deleteProduct = async (id) => {
    try {
      await productService.deleteProduct(id)
    } catch (error) {
      console.error(error)
    }
    navigate(0)
  }

  return (
    <>
      <IconButton onClick={handleClick} role='menu'>
        <MdMoreVert />
      </IconButton>
      <Menu open={open} anchorElement={anchorElement} handleClose={handleClose}>
        <MenuItem onClick={() => navigate(`/edit/${props.id}`)}>
          Editar
        </MenuItem>
        <MenuItem onClick={() => deleteProduct(props.id)}>Eliminar</MenuItem>
      </Menu>
    </>
  )
}

MenuAction.propTypes = {
  id: PropTypes.string.isRequired
}

export default MenuAction
