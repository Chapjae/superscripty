import type { MetaFunction } from '@remix-run/node';
import TextToSpeech from "~/components/TextToSpeech"

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
    <TextToSpeech/>
    </div>
  );
}
