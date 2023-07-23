export default function AboutWithId ({ params } : any) {
  return (
    <div>
      {/* testing dynamic routing in nextjs */}
      <h1>This is about page ID {params.id} </h1>

    </div>
  )
}