#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int vector[100], temp, index;
int arrSize = sizeof(vector) / sizeof(int);
int comp = 0, swaps = 0;

void inicializarVetor(){
	
	// Inicializa Array com números de 1 a 100
	for(int i=0; i<arrSize; i++){
		vector[i] = i+1;
	}
	
	// Semente para gerar números aleatórios
	srand(time(NULL));
	
	// Percorre o Array e troca cada elemento com um elemento aleatório ainda não escolhido
	for(int i=arrSize-1; i>0; i--){
		int j = rand() % (i+1);
		temp = vector[i];
		vector[i] = vector[j];
		vector[j] = temp;
	}
	
}

void exibirVetor(){
	for(int i=0; i<arrSize; i++){
		printf("%d ", vector[i]);
	}
}

void selectionSort(){	
	for(int k=0; k<arrSize; k++){
		index = k;			
		for(int l=k; l<arrSize-1; l++){			
			if(vector[index] > vector [l+1]){
				index = l+1;
				swaps++;				
			}
			comp++;			
		}		
		temp = vector[k];		
		vector[k] = vector[index];
		vector[index] = temp;
	}
}

int main(){
	// Variáveis para calcular o tempo de execução
	clock_t inicio, fim;
	double tempo;
	
	inicio = clock();
	
	printf("Vetor embaralhado:\n");
	inicializarVetor();
	exibirVetor();
	
	printf("\n\nVetor organizado:\n");
	selectionSort();	
	exibirVetor();
	
	fim = clock();
	
	tempo = (double)(fim-inicio) / CLOCKS_PER_SEC;
	printf("\n\nTempo de execucao: %f segundos\n", tempo);
	printf("Comparacoes: %d\n", comp);
	printf("Trocas: %d\n", swaps);
	
	printf("\n\n");
	system("Pause");
	return 0;
}
