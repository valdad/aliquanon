  const docRef = firestore().collection('cities').doc('empty');
  const doc = await docRef.get();
  expect(doc.exists).to.be.false;  
