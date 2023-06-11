type Props = {
    subtitle: string
}


const Subtitle = (name: Props) => {
    return (
      <div className="lg:text-2xl md:text-xl text-lg spacing tracking-wider  p-2 my-4">
      {name.subtitle}
  </div>
    )
  }
  
  export default Subtitle 