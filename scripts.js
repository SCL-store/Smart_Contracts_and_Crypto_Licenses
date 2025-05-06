document.getElementById('contractForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.form-container').style.display = 'none';
  document.getElementById('contractRecommendations').style.display = 'block';
});

document.getElementById('contractType').addEventListener('change', function() {
  const contractType = this.value;
  const relatedQuestionDiv = document.getElementById('relatedQuestion');
  relatedQuestionDiv.innerHTML = '';

  if (contractType === 'erc20') {
    relatedQuestionDiv.innerHTML = `
      <label for="tokenSupply">Token Supply?</label>
      <input type="number" id="tokenSupply" name="tokenSupply" placeholder="Total supply" required>
    `;
  } else if (contractType === 'erc721') {
    relatedQuestionDiv.innerHTML = `
      <label for="nftCount">How many NFTs?</label>
      <input type="number" id="nftCount" name="nftCount" placeholder="Total NFTs" required>
    `;
  } else if (contractType === 'staking') {
    relatedQuestionDiv.innerHTML = `
      <label for="stakingDuration">Staking Duration (days)</label>
      <input type="number" id="stakingDuration" name="stakingDuration" required>
    `;
  } else if (contractType === 'ico') {
    relatedQuestionDiv.innerHTML = `
      <label for="icoTarget">ICO Target (ETH)</label>
      <input type="number" id="icoTarget" name="icoTarget" required>
    `;
  }
});

document.querySelectorAll('.chooseContract').forEach(function(button) {
  button.addEventListener('click', function() {
    document.getElementById('contractRecommendations').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'block';
  });
});
