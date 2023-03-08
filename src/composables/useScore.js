import { ref } from 'vue'

const useScore = () => {
    const changeScore = (value) => {
        score.value += value
    }
    return { score, changeScore }
}

export default useScore