import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimationLogoLoading, LoadingContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Loading() {
    return(
        <LoadingContainer>
            <AnimationLogoLoading>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#3294F8"}} />
            </AnimationLogoLoading>

            <p>
                Carregando post...
            </p>

            <AnimationLogoLoading>
                <FontAwesomeIcon icon={faGithub} style={{color: "#3294F8"}} />
            </AnimationLogoLoading>
        </LoadingContainer>
    )
}