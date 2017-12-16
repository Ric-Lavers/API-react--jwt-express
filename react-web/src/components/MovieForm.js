import React from 'react';


export default class MovieForm extends React.Component {

  constructor(props){
    super(props)
    console.log(props);
    this.onSubmit = props.onSubmit;
    if (props.current) {
      this.current = props.current;
      this.state = {open: false}
    }else{
    this.current = false;
    this.state = {open: true}
    }
  }


  handleFormSubmit = (event) => {
      console.log(this.state.open);
      if (this.state.open === false) {
        this.setState({open: true});
      }
      event.preventDefault();
      var id = 0;
      if (this.current) {
        var currentMovie =  true;
        id = this.current._id;
      }else{
        currentMovie = false;
          console.log("hello");
      }

      const {elements} = event.target;
      console.log(typeof(elements),elements);
      const title = elements["title"].value;
      const year = elements["year"].value;
      const star = elements["star"].value;
      const directorFirst = elements["directorFirst"].value;
      const directorLast = elements["directorLast"].value;
      const director = {firstName:directorFirst,lastName:directorLast}

      this.onSubmit( {title, year, star, director, currentMovie, id });
  };
  style = () =>{
    console.log(this.current);
  }

  render() {
    return(

        <form onSubmit={this.handleFormSubmit}>
          <div  className="not-button" style={this.state.open?({display:'flex'}):({display:'none'})}>
          <br/>
            <label><span className='label-span'>Title</span> <input placeholder={this.current && this.current.title} type="text" name="title"></input> </label>
            <label><span className='label-span'>Year</span> <input placeholder={this.current && this.current.year} type="number" name="year"></input> </label>
            <label><span className='label-span'>Star</span> <input placeholder={this.current && this.current.star} type="text" name="star"></input> </label>
            <span className='label-span'>Director</span>
                  <label>first name<input type="text" placeholder={this.current && this.current.director.firstName} name="directorFirst"></input> </label>
                  <label>last name<input type="text" placeholder={this.current && this.current.director.lastName} name="directorLast"></input></label>
          </div>
          <button type="submit"> {this.current?(" Edit Movie"):(" Create Movie")} </button>
        </form>
    )

  }
} ;
// export default function MovieForm({ onSubmit, current}){
//
//
//
//   function handleFormSubmit(event){
//     event.preventDefault();
//     var id = 0;
//     if (current) {
//       console.log("Hi THERE");
//       var currentMovie =  true;
//       id = current._id;
//     }else{
//       currentMovie = false;
//         console.log("hello");
//     }
//
//     const {elements} = event.target;
//     console.log(typeof(elements),elements);
//     const title = elements["title"].value;
//     const year = elements["year"].value;
//     const star = elements["star"].value;
//     const directorFirst = elements["directorFirst"].value;
//     const directorLast = elements["directorLast"].value;
//     const director = {firstName:directorFirst,lastName:directorLast}
//
//     onSubmit( {title, year, star, director, currentMovie, id });}
//
//   return(
//       <form onSubmit={handleFormSubmit}>
//       <br/>
//         <label><span className='label-span'>Title</span> <input placeholder={current && current.title} type="text" name="title"></input> </label>
//         <label><span className='label-span'>Year</span> <input placeholder={current && current.year} type="number" name="year"></input> </label>
//         <label><span className='label-span'>Star</span> <input placeholder={current && current.star} type="text" name="star"></input> </label>
//         <span className='label-span'>Director</span>
//               <label>first name<input type="text" placeholder={current && current.director.firstName} name="directorFirst"></input> </label>
//               <label>last name<input type="text" placeholder={current && current.director.lastName} name="directorLast"></input></label>
//         <button type="submit"> {current?(" Edit Movie"):(" Create Movie")} </button>
//       </form>
//   )
// }
