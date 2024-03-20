import Accordion from "../components/Accordion";


function AccordionPage(){
   const items = [
    {
        id: '12',
        label: 'React Label 1' ,
        content: 'React can be used in an application like this all the time.' ,
    },
    {
        id: '13',
        label: 'React Label 2' ,
        content:  'CSS can be used in an application like this all the time.',
    },
    {
        id: '14',
        label: 'React Label 3' ,
        content: 'JS can be used in an application like this all the time.',
    },
   ];

   return(
    <div>
        <Accordion items={items} />
    </div>
   )
};

export default AccordionPage;