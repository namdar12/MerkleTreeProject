const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

//Create the merkleTree
//const merkleTree = new MerkleTree(niceList);

// get the root
//Console log and output the hex string
//const root = merkleTree.getRoot();

// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = 'fadc3f729207906a7d62fcb6bbf0fd2e5b5a956c5887174e29df63f16fdf775e';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const {proof,name} = req.body;
  // TODO: prove that a name is in the list 
  const isInTheList =  verifyProof(proof, name, MERKLE_ROOT)
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }



});


app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
