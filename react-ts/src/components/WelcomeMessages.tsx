import { Box } from "@material-ui/core"

interface WelcomeMessageProps {
  position: string
  country?: string
}
const WelcomeMessages = ({position, country = 'vietnam'} : WelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  )
}

export default WelcomeMessages;