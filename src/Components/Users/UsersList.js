import Card from "../UI/Card";
import classes from './UsersList.module.css';
const UsersList = props =>{
    // we are using maps so that we can turn user array of data int o JSX
    return (
    <Card className={classes.users}>
    <ul>
        {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
            </li>
        ))}
    </ul>
    </Card>);
}
export default UsersList;