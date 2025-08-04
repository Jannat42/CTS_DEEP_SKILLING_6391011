import java.util.*;

public class Financial_Forecasting 
{
    public static double forecastValue(double currentValue, double[] rates, int index) 
    {
        if (index == rates.length) 
        {
            return currentValue;
        }
        return forecastValue(currentValue * (1 + rates[index]), rates, index + 1);
    }

    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter initial value: ");
        double initialValue = sc.nextDouble();
        System.out.print("Enter number of years: ");
        int years = sc.nextInt();
        double[] growthRates = new double[years];
        System.out.println("Enter the growth rate for each year (in %):");
        for (int i = 0; i < years; i++) 
        {
            System.out.print("Year " + (i + 1) + ": ");
            growthRates[i] = sc.nextDouble() / 100.0; 
        }
        double futureValue = forecastValue(initialValue, growthRates, 0);
        System.out.printf("Forecasted Value after %d years: Rs.%.2f%n", years, futureValue);
    }
}
