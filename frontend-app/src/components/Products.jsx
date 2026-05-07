import ProductCard from "./ProductCard"



const Products=()=>{

    let Products=[
        {
            name : "mobile",
            price:5000,
            description:"good condition",
            ratings:"⭐⭐⭐⭐",
            imageSrc:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
        },
        {
            name : "laptop",
            price:20000,
            description:"good condition",
            ratings:"⭐⭐⭐⭐",
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xB0QmTvPhkY3ECHlPrAsRnPQik4i9P9ncA&s",
        },
         {
            name : "Airpods",
            price:5000,
            description:"good condition",
            ratings:"⭐⭐⭐⭐",
            imageSrc:"https://static.vecteezy.com/system/resources/thumbnails/034/087/793/small/iconic-airpods-pro-from-apple-inc-on-a-clean-white-backdrop-ai-generated-photo.jpg",
        },
        
    ]
    return (
        <>
        <Nav/>
        <div id="main-container">
            {Products.map((product)=>(
                <div>
                    <ProductCard details={product}/>
                </div>
            ))}
        </div>
        </>
    );
}
export default Products;