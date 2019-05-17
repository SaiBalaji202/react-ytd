import React,{Component} from 'react';
import './App.css';
import Nav from './Nav/nav';
import SideDrawer from './Components/SideDrawer/SideDrawer'
import BackDrop from './Components//BackDrop/BackDrop'

class App extends Component {
  
  state={
    sideDrawerOpen:false
    
  }
  
  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  }

backDropClickHandler=()=>{
  this.setState({sideDrawerOpen:false})
}
  
  render(){
    let backDrop;
  
    if(this.state.sideDrawerOpen){
      backDrop= <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
    <div style={{height:'100%'}}>
    <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen}/>
    {backDrop}
    <main style={{marginTop:"64px"}}>
      <p>This is the page Content</p>
    </main>
    </div>
  );
}
}
export default App;
