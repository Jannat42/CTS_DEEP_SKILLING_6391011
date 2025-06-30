import org.junit.*;

public class patterntesting{
    private Hello ob;
    @Before
    public void setUp(){
        ob = new Hello();
    }
    @After
    public void tearDown(){
        ob = null;
    }
    @Test
    public void testing(){
        Assert.assertEquals("Hello",ob.greet());
    }
}