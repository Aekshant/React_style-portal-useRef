import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


const AddUser = props =>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();//helps to prevent form submit 
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            })
            return;
        }
        if(+enteredUserAge < 1){//we add plus becoz enteredAge is number
            setError({
                title: 'Invalid age',
                message:'Please enter a valid age'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value ='';
    }; 
    const errorHandler = () =>{
        setError(null);
    }
    //onsubmit on the form is the function that will have called when form is submitted 
    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input 
            id="username" 
            type="text" 
            ref={nameInputRef}    
            />
            <label htmlFor="age">Age (Years)</label>
            <input 
            id="age" 
            type="number"
            ref={ageInputRef} />
            <Button type="submit">Add User</Button>
        </form>
        </Card></Wrapper>
    );
};
export default AddUser;
