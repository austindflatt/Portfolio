import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ProjectContextProvider } from './context/projectContext/ProjectContext';
import { MessageContextProvider } from './context/messageContext/MessageContext';
import { UserContextProvider } from './context/userContext/UserContext';
import { SkillContextProvider } from './context/skillContext/SkillContext';
import { VideoContextProvider } from './context/videoContext/VideoContext';
import { AboutContextProvider } from './context/aboutContext/AboutContext';
import { AlertProvider } from './context/alertContext/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthContextProvider>
		<AlertProvider>
			<ProjectContextProvider>
				<MessageContextProvider>
					<UserContextProvider>
						<SkillContextProvider>
							<VideoContextProvider>
								<AboutContextProvider>
									<App />
								</AboutContextProvider>
							</VideoContextProvider>
						</SkillContextProvider>
					</UserContextProvider>
				</MessageContextProvider>
			</ProjectContextProvider>
		</AlertProvider>
	</AuthContextProvider>
)