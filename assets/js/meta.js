const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* MetaMask is installed */
  
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log(accounts[0]);
      } catch (err) {
        console.err(err.message);
      }
    } else {
      // MetaMask is not installed 
      console.log("Please install Metamask")
    }
  };

const connectButton = document.getElementById("metaConnect");
connectButton.addEventListener("click", connectWallet);


  


const walletAddress = accounts[0];
console.log(walletAddress)