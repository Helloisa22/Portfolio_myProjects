import java.util.Random;
import java.util.Scanner;

public class adivinha{
    public static void main(String args[]) {
        // Criar um projeto de adivinha de 0 até 20
        //Inicio verifcar se o número que o usuario digitou é igual a 7
        //Metodo random para gerar número aleatorio de 0 até 20

        Random rand = new Random();
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número de 0 até 20");
        int supostoNumero = entrada.nextInt();

        int num = rand.nextInt(20)+0;

        if(supostoNumero == num) {
            System.out.println("Você Acertou!! número sorteado " + num);
        }else{
            if (supostoNumero < num){
                System.out.println("Você está abaixo do número " + num);
            }else{
                System.out.println("Você está acima do número " + num);
            }
        }
    }
}

