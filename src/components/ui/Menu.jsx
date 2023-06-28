import { styled } from 'styled-components'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

const MenuWrapper = styled.div({
  backgroundColor: (props) => props.theme.palette.gray[300],
  position: 'absolute'
})

const Menu = (props) => {
  const menuRef = useRef(null)

  useEffect(() => {
    if (!props.open) return
    const listener = document.addEventListener('mousedown', (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (!props.anchorElement.contains(event.target)) {
          props.handleClose()
        }
      }
    })

    return () => document.removeEventListener('mousedown', listener)
  }, [props.open])

  if (!props.open) return null
  return <MenuWrapper ref={menuRef}>{props.children}</MenuWrapper>
}

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  open: PropTypes.bool.isRequired,
  anchorElement: PropTypes.instanceOf(Element),
  handleClose: PropTypes.func
}

export default Menu
