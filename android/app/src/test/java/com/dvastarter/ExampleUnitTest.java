package com.dvastarter;

import org.junit.Test;

import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.After;
import com.microsoft.appcenter.espresso.Factory;
import com.microsoft.appcenter.espresso.ReportHelper;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {

  @Rule
  public ReportHelper reportHelper = Factory.getReportHelper();

    @Test
    public void addition_isCorrect() throws Exception {
        assertEquals(4, 2 + 2);
    }

  @After
  public void TearDown(){
    reportHelper.label("Stopping App");
  }
}
