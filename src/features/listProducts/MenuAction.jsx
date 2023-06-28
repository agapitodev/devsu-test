import { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import { IconButton, Menu, MenuItem } from '../../components/ui'
import { useNavigate } from 'react-router-dom'

const MenuAction = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const open = Boolean(anchorElement)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorElement(open ? null : event.currentTarget)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <IconButton onClick={handleClick} role='menu'>
        <MdMoreVert />
      </IconButton>
      <Menu open={open} anchorElement={anchorElement} handleClose={handleClose}>
        <MenuItem onClick={() => navigate('/edit')}>Editar</MenuItem>
        <MenuItem>Eliminar</MenuItem>
      </Menu>
    </>
  )
}

export default MenuAction
