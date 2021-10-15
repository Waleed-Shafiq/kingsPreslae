import { useEffect, useState } from 'react'
import { getBep20Contract } from '../utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import environment from '../utils/Environment';



const useTotalSupply = () => {
    const [supply, setSupply] = useState(0)

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.kingsAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        try {
            const res = await contract.methods.totalSupply().call()
            setSupply(res)
        } catch (error) {
            console.log('error in total supply::::', error)
        }

    }, [contract, fastRefresh])

    return supply
}



const useMaxSupply = () => {
    const [max, setMax] = useState(0)

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.kingsAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        try {
            const res = await contract.methods.MAX_SUPPLY().call()
            setMax(res)
        } catch (error) {
            console.log('error"""', error)
        }

    }, [contract, fastRefresh])

    return max
}


const usePrice = () => {
    const [price, setPrice] = useState(0.0)

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.kingsAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        try {
            const res = await contract.methods.PRESALE_PRICE().call()
            setPrice(parseInt(res) / 10 ** 18)
        } catch (error) {
            console.log('error"""', error)
        }

    }, [contract, fastRefresh])

    return price
}

export default useTotalSupply

export { useTotalSupply, useMaxSupply, usePrice };