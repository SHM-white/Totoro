import LoginScreen from '../components/LoginScreen';
import HelpContent from '../dialog/index.md';

export default function LoginPage() {
  return <LoginScreen helpContent={<HelpContent />} />;
}
