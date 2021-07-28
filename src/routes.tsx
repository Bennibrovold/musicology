import { Route, Switch } from "react-router-dom";

const TestComponent: any = () => <div>I`m test component</div>

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={TestComponent} />
            <Route path="/support" component={TestComponent} />   
            <Route path="/about" component={TestComponent} />
        </Switch>
    )
}

export default Routes;