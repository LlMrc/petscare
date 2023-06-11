type Props = {
    title: string
}

const Title = (name: Props) => {
  return (
    <div className="lg:text-5xl md:text-xl text-base  my-4  text-center md:text-start   ">
        {name.title}
    </div>
  )
}

export default Title





