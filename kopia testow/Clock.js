// import React from "react";
// import Clock from "../../components/Clock";
// import ReactDom from "react-dom";
// import renderer from "react-test-renderer";

// var root = null;
// var clockRenderer=null;

// describe('<Clock />', ()=> {
//     describe('when given minutes and secounds (DOM)', ()=>{
//         beforeEach(()=>{
//             root =document.createElement('div');
//             ReactDom.render(
//             <Clock className="" minutes={10} seconds={20} />,root)

//         })
//         it('renders prpperly', ()=> {
            
//             expect(root.childNodes[0].nodeName).toEqual("H2")
//             expect(root.childNodes[0].className).toMatch(/clock/)
//             expect(root.childNodes[0].textContent).toMatch(/10:20/)
//         })
//         it('renders an h2 elements', ()=> {
            
//             expect(root.childNodes[0].nodeName).toEqual("H2")
            
//         })
//         it('sets a clock classNames', ()=> {
            
//             expect(root.childNodes[0].className).toMatch(/clock/)
            
//         })
//         it('renders time properly', ()=> {
            
//             expect(root.childNodes[0].textContent).toMatch(/10:20/)
//         })

//     });
// });

//     describe('<Clock />', ()=> {
//         describe('when given minutes and secounds (TestRenderer)', ()=>{
//             beforeEach(()=>{
//                 clockRenderer = renderer.create(
                
//                 <Clock className="" minutes={10} seconds={20} />)
    
//             })
//             it('renders prpperly', ()=> {
//                 // console.log(clockRenderer.toJSON().children[1].children);
//                 console.log(clockRenderer.toJSON());

//                 expect(clockRenderer.toJSON()).toMatchSnapshot(); //zapis komponentu do snapchotu
                  

            
                
//                 expect(clockRenderer.toJSON().type).toEqual("h2")
//                 expect(clockRenderer.toJSON().props).toMatchObject({"className": expect.stringMatching(/clock/)})
//                 // expect(clockRenderer.toJSON().children).toEqual(expect.arrayContaining(["10", "20"]))
//                 expect(clockRenderer.toJSON().children[1]).toMatchObject({"children": expect.arrayContaining(["10"])})
//                 expect(clockRenderer.toJSON().children[3]).toMatchObject({"children": expect.arrayContaining(["20"])})
//             })

//             it('renders an h2 elements', ()=> {
                
//                 expect(clockRenderer.toJSON().type).toEqual("h2")
                
//             })
//             it('sets a clock classNames', ()=> {
                
//                 expect(clockRenderer.toJSON().props).toMatchObject({"className": expect.stringMatching(/clock/)})
                
//             })
//             xit('renders time properly', ()=> {
                
//                 expect(clockRenderer.toJSON().children[1]).toMatchObject({"children": expect.arrayContaining(["10"])})
//             })
    
//         })
    
        
//     })

//     it('sets className to empty string if not given anything else', ()=> {
//     expect(<Clock minutes={10} seconds={20} />).toEqual(<Clock className="" minutes={10} seconds={20} />)
// });