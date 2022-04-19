import {useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCount = ({stock,titleAdd,titleLess,initial,AddQuantity,LessQuantity,finishBuy,handleItemCount}) => {
    if(stock === 0){initial = 0;};
    const [stockButton,setstockButton] = useState(initial);
    const handlerAdd = () => {
        AddQuantity(stock,stockButton,setstockButton);
    };
    const handlerLess= () =>{
            LessQuantity(stockButton,setstockButton);
    };
    const onAdd = () =>{
        finishBuy(stockButton,stock);
        handleItemCount();
    }

    return(
        <>
            <Button style={buttonHandler} onClick={handlerAdd}>{titleAdd}</Button>
            <Typography>{stockButton}</Typography>
            <Button style={buttonHandler} onClick={handlerLess}>{titleLess}</Button>
            <Button style={buttonAdd} onClick={onAdd} on>
                Agregar al carrito
            </Button>
        </>
    );
}

export default ItemCount;


const buttonHandler ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 20,
    padding:0
}
const buttonAdd ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 9,
    padding: 5
}