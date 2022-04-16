import Row from "../../../components/row";
import SizedBox from "../../../components/sized-box";
import CategoryList from "./products";

function Categories() {
    return ( 
        <div className="container">
              <Row justifyContent="space-between" alignItems="center">
            <div className="categories__title">Категорий</div>
            <Row>
                <div className="categories__item categories__item--active">Все</div>
                <div className="categories__item">Мужской</div>
                <div className="categories__item">Женский</div>
            </Row>
        </Row>
        <SizedBox height={37}></SizedBox>
        <CategoryList></CategoryList>
        </div>
      
     );
}

export default Categories;