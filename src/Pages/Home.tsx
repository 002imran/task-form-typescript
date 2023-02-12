import axios from 'axios';
import { makeStyles, createStyles, Theme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const Home= () => {
      const [posts, setPosts] = useState<Post[]>([]);

      axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((res) => {
                setPosts(res.data);
            })
            .catch(err =>{
                console.log(err);
           })

      return (
        <>
        <h2>Welcome to home page</h2>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts
                            
                    .map((post) => (
                        <TableRow key={post.id}>  
                            <TableCell align="right">{post.id}</TableCell>
                            <TableCell align="right">{post.title}</TableCell>
                            <TableCell align="right">{post.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default Home;
