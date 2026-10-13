// EDIT: add a project by adding an object. status: 'completed' | 'in-progress'
export const projects=[
 {slug:'sentiment-bert',title:'Sentiment Analysis with BERT',status:'completed',featured:true,tags:['NLP','PyTorch'],
  summary:'Fine-tuned BERT to classify product reviews, with error analysis on sarcasm.',
  metrics:{accuracy:'94.2%',f1:'0.93'},github:'#',demo:'#',
  sections:{Problem:'Describe the problem and why it matters.',Approach:'Model, data, preprocessing and training setup.',Results:'Metrics, charts and what the errors showed.',Learned:'What you would change next time.'}},
 {slug:'plant-classifier',title:'Plant Disease Classifier',status:'completed',featured:true,tags:['Computer Vision','TensorFlow'],
  summary:'CNN with transfer learning that detects leaf diseases from phone photos.',
  metrics:{accuracy:'96.8%',classes:'38'},github:'#',demo:'#',
  sections:{Problem:'...',Approach:'...',Results:'...',Learned:'...'}},
 {slug:'movie-recommender',title:'Movie Recommender',status:'completed',featured:true,tags:['RecSys','scikit-learn'],
  summary:'Hybrid collaborative and content-based recommender, evaluated with ranking metrics.',
  metrics:{'NDCG@10':'0.41'},github:'#',demo:'',
  sections:{Problem:'...',Approach:'...',Results:'...',Learned:'...'}},
 {slug:'rag-assistant',title:'Study Notes RAG Assistant',status:'in-progress',featured:false,tags:['LLM','RAG'],
  summary:'Ask questions over your own lecture notes with retrieval-augmented generation.',
  metrics:{},github:'#',demo:'',
  sections:{Problem:'...',Approach:'...',Results:'Still training. Results coming soon.',Learned:'...'}},
];
