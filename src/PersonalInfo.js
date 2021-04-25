import Vc from 'vilmar-cabañero'
import { entropiya, niventa } from 'entropiya.ph'
import { vilmarcabanero, apps } from 'vilmarcabanero'
import github from 'github'



const PersonalInfo = () => {
	return (
		<Vc
			name='Vilmar Cabañero'
			profession='Full Stack Developer'
			expertise='MERN Stack'
			startupProject1={entropiya.ph}
			startupProject2={niventa.net}
			webApps={vilmarcabanero.com/apps}
			degree='BS Mechanical Engineering'
			greatestAchievement='Top 5 in Board Exam'
			github={github.com/vilmarcabanero}
		/>
	)
}


export default PersonalInfo

