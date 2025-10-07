class BloomFilter {

    constructor (size, hashCount) {
        this.size = size;
        this.hashCount = hashCount;
        this.bitArray = new Array(size).fill(0);
        this.seeds = [17, 31, 101, 37, 61, 73, 97];
    }

    charToVal(c) {
        if (c == '_') return 36;
        if (/[0-9]/.test(c)) return 26 + parseInt(c);
        return c.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
    }

    hash(str, seeds) {
        let h = 0;
        for (let i=0; i < str.length; i++) {
            h = (h * seeds + this.charToVal(str[i])) % this.size;
        }
        return h;
    }

    add(str) {
        for (let i=0; i < this.hashCount; i++) {
            const index = this.hash(str, this.seeds[i]);
            this.bitArray[index] = 1
        }
    }

    check(str) {
        for (let i=0; i < this.hashCount; i++) {
            const index = this.hash(str, this.seeds[i]);
            if (this.bitArray[index] === 0) return false;
        }
        return true;
    }
}

export default BloomFilter;