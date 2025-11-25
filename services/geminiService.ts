import { QUALIFICATIONS } from '../constants';

export const getTrainingRecommendations = async (userQuery: string): Promise<string> => {
  // Simulate network delay to feel like a real search
  await new Promise(resolve => setTimeout(resolve, 600));

  const lowerQuery = userQuery.toLowerCase().trim();
  
  if (!lowerQuery) {
    return "Please enter a search term.";
  }

  // Simple keyword matching against title, description, and SAQA ID
  const matches = QUALIFICATIONS.filter(q =>
    q.title.toLowerCase().includes(lowerQuery) ||
    q.description.toLowerCase().includes(lowerQuery) ||
    q.saqaId.includes(lowerQuery)
  );

  if (matches.length === 0) {
    return "We couldn't find a specific qualification matching your query in our core catalogue. Please contact us at 031 205 0384 for specialized assistance or try keywords like 'Driver', 'Freight', or 'Supply Chain'.";
  }

  const results = matches.map(q => `**${q.title}** (SAQA ${q.saqaId})\n${q.description}`).join('\n\n');
  
  return `Based on your search, we recommend the following accredited qualifications:\n\n${results}\n\nContact us to book this training.`;
};