import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Home from "../pages/Home/Home"
import ChemMolecule from "../pages/ChemMolecule/ChemMolecule"
import DNA from "../pages/DNA/DNA"
import Sucrose from "../pages/Sucrose/Sucrose"
import Glucoside from '../pages/Glucoside/Glucoside'
import Glocose from '../pages/Glucose/Glucose'
import H2oMolecule from '../pages/H2O/H2O'
import Chatroom from "../pages/Chatroom/Chatroom"
import Footer from "../components/Footer/Footer"

function Main() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/chemMolecule' exact component={ChemMolecule} />
                <Route path='/dna' exact component={DNA} />
                <Route path='/sucrose' exact component={Sucrose} />
                <Route path='/glucoside' exact component={Glucoside} />
                <Route path='/glucose' exact component={Glocose} />
                <Route path='/h2oMolecule' exact component={H2oMolecule} />
                <Route path='/chatroom' exact component={Chatroom} />
            </Switch>

            <Footer />

        </Router>
    )
}

export default Main
