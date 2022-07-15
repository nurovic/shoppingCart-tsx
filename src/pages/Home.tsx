import { Col, Row } from "react-bootstrap"
import React,{useEffect, useState} from "react"
import axios from "axios"
import StoreItems from "../components/StoreItem"

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const Home = () => {
  const[ itemData, setItemData] = useState<CartItemType[]>([])

  const getData = async () => {
    const getData = await axios.get<CartItemType[]>("https://fakestoreapi.com/products")
    setItemData(getData.data)
  }

  useEffect(() => {
    getData()
  }, [itemData])
  return (
    <>
    <Row md={2} xs={1} lg={3} className="g-3">
      {
        itemData.map(item => ( 
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default Home