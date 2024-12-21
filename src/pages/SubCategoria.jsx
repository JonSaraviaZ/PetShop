import { useParams } from 'react-router-dom';
import ListPosts from '../components/ListPosts';

const SubCategoria = () => {
    const {subCategoria} = useParams();
    return (
        <ListPosts url={`/posts?subcategoria=${subCategoria}`}/>
    )
};

export default SubCategoria;