import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionItem, AccordionHeader} from 'reactstrap';

function Accordionsacko() {
  return (<div>
    <hr/>
    <div className="hTMJoe1" style={{marginTop:"50px",marginLeft:"20px"}}>
    <div className="gvGqPU1"><p className="jlEocN1">ACKO General Insurance Limited</p><p className="dxMCMg1">2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th Main road, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102</p></div>
      <div>
     
      
<div>
<Accordion
  flush
  toggle={function noRefCheck(){}}
>
  <AccordionItem>
    <AccordionHeader targetId="1">
      Accordion Item 1
    </AccordionHeader>
    <AccordionItem accordionId="1">
      <strong>
        This is the first item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionItem>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      Accordion Item 2
    </AccordionHeader>
    <AccordionItem accordionId="2">
      <strong>
        This is the second item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionItem>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      Accordion Item 3
    </AccordionHeader>
    <AccordionItem accordionId="3">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionItem>
  </AccordionItem>
</Accordion>
</div>
      
      </div>
    </div>
    <div  style={{marginTop:"100px"}}></div>
    </div>
  );
}




export default Accordionsacko;
