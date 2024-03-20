import SortableTable from "../components/SortableTable";

function TablePage(){ 
    const data = [
        {name:'Watermelon', color:'bg-green-800', score: 3},
        {name:'Orange', color:'bg-orange-600', score: 2},
        {name:'Peach', color:'bg-amber-200', score: 4 },
        {name:'Apple', color:'bg-red-500', score: 1 },
        {name:'Pineapple', color:'bg-yellow-600', score: 6 },
        {name:'Blueberry', color:'bg-blue-500', score: 8 },
    ];

    const config =[
        {
            label: 'Name of Fruit',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,    
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
        {
            label: 'Price',
            render: (fruit) => fruit.score * 3.99,
            sortValue: fruit => fruit.score * 3.99,
        },
    ]

    const keyFn = (fruit) => {
        return fruit.name;
    };


    return (
        <div>
          <SortableTable data={data} config={config} keyFn={keyFn}/>  
        </div>
    )
}

export default TablePage;