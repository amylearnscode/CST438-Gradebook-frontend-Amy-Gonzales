import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import {DataGrid} from '@mui/x-data-grid';
import {SERVER_URL} from '../constants.js
import React, {useState} from 'react';

 const [formState, setFormState] = useState({
    assignmentName: '',
    dueDate: '',
    courseName: ''
  });

return (
	
<div>
     <label>
        Add an Assignment
      </label>
</div>      

export default AddAssignment;