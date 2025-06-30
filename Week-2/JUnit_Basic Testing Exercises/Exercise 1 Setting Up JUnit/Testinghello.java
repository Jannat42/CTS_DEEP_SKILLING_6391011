import org.junit.*;

public class Testinghello{
    @Test
    public void testing(){
        Hello ob = new Hello();
        Assert.assertEquals("Hello",ob.greet());
    }
}