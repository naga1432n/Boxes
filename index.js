const Box = props => {
  return <div className={`box ${props.className}`}>{props.label}</div>
}

const element = (
  <div className='container'>
    <h1 className='title'>Boxes</h1>
    <Box className='small' label='Small' />
    <Box className='medium' label='Medium' />
    <Box className='large' label='Large' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
