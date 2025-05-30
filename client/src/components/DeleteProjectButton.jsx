import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../mutations/projectMutation';
import { useNavigate } from 'react-router-dom';

export default function DeleteProjectButton({projectId}) {
    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT,{
        variables:{id:projectId},
        onCompleted:() => navigate('/'),
        refetchQueries:[{query:GET_PROJECTS}]

    })

  return <div className="d-flex mt-5 ms-auto">
    <div className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className='icon' />Delete Project
    </div>
  </div>
}
