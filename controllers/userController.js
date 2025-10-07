// const BloomFilter = require('../services/BloomFilter');
import BloomFilter  from "../services/BloomFilter.js";
const bloom = new BloomFilter(9586, 7);

function checkIsValidInput(value) {
    const regex = /^[a-z_][a-z0-9_]*$/;
    return regex.test(value);
}

async function handleFilterUsername(req, res) {
    const username = req.body.username;

    if (!checkIsValidInput(username)) {
        return res.status(403).json({ success: false, message: "Username can only have lowercase letters, numbers, and _ , and cannot start with a number." })
    }

    try {
        const response = bloom.check(username);
        if (!response) {
            bloom.add(username);
        } else {
            return res.status(403).json({ success: false, message: `"${username}" might be in the Bloom filter (possible false positive)` })
        }
        return res.status(201).json({ success: true, message: `"${username}" is definitely not in the Bloom filter. Adding to the filter now.` })

    } catch (err) {
        console.log("Error:", err)
    }
}

export default { handleFilterUsername };