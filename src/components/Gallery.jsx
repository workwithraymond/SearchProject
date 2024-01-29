import { useQuery } from 'react-query';
import axios from 'axios';

const url = 'https://api.unsplash.com/search/photos?client_id=CXdeBc15JY2dWKTt0qRjr-iiToStzC-3kVwVM4INQ-M&query=office'


const Gallery = () => {

  const response = useQuery({
    queryKey:['images'],
    queryFn:async () => {
      const result = await axios.get(url)

      return result.data
    }
  });

  console.log(response);
  
  return (
    <div>Gallery</div>
  )
}
export default Gallery