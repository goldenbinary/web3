pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract BagelCoin is ERC1155 {
    mapping(bytes32 => bool) private _validTokens;

    constructor() ERC1155("https://example.com/token/{id}.json") {
        // Mint 100 tokens with ID 1, using the base URI https://example.com/token/
        _mint(msg.sender, 1, 100, "");
        
        // Generate unique identifiers for each token
        for (uint i = 1; i <= 100; i++) {
            bytes32 tokenHash = keccak256(abi.encodePacked(i));
            _validTokens[tokenHash] = true;
        }
    }

    function isValidToken(uint tokenId) public view returns (bool) {
        bytes32 tokenHash = keccak256(abi.encodePacked(tokenId));
        return _validTokens[tokenHash];
    }
}
