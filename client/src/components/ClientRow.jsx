import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { FaTrash } from "react-icons/fa";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function ClientRow({ client }) {
    const [deleteClient] = useMutation(DELETE_CLIENT,{
        variables:{id:client.id},
        update(cache,{data:{deleteClient}}){
            const {clients} = cache.readQuery({query:GET_CLIENTS});
            cache.writeQuery({
                query:GET_CLIENTS,
                data:{clients:clients.filter(client => client.id !== deleteClient.id)}
            })
        }
    })
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={deleteClient}>
            <FaTrash />
        </button>
      </td>
    </tr>
  );
}
