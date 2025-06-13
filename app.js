import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function carregarPessoas() {
  const lista = document.getElementById("officesList");
  lista.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "pessoas"));
  const grupos = {};

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (!grupos[data.escritorio]) grupos[data.escritorio] = [];
    grupos[data.escritorio].push(data);
  });

  for (const esc in grupos) {
    const bloco = document.createElement("div");
    bloco.innerHTML =
      `<h3>${esc}</h3><ul>` +
      grupos[esc]
        .map(
          (p) =>
            `<li><strong>${p.nome}</strong> - ${p.contato} (${p.aniversario})</li>`
        )
        .join("") +
      "</ul>";
    lista.appendChild(bloco);
  }
}

document.getElementById("addPessoa").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value;
  const aniversario = document.getElementById("aniversario").value;
  const contato = document.getElementById("contato").value;
  const escritorio = document.getElementById("escritorio").value;

  await addDoc(collection(db, "pessoas"), {
    nome,
    aniversario,
    contato,
    escritorio,
  });

  carregarPessoas();
});

carregarPessoas();
