

export function ImageGallery({ images }) {


    
  return (
    <div>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </div>
  );
}


// componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.imagesName
//     const nextName = this.props.imagesName
//     if(prevName !== this.props.imagesName) {
//         fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=34679594-d1431b462dfbe95ceee8bf0ed&image_type=photo&orientation=horizontal&per_page=12`).then(resp => resp.json()).then(images => this.setState({images}))
//     }
// }
